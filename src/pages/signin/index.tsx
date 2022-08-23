import LoadingButton from "@mui/lab/LoadingButton";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useCallback } from "react";
import Div100vh from "react-div-100vh";
import {
  useForm,
  Controller,
  SubmitHandler,
  ControllerProps,
} from "react-hook-form";
import GoogleIcon from "~/assets/images/g-logo.png";
import { useLoading } from "~/hooks/loading";
import { Method, METHOD, signin } from "~/services/auth";
import { NextPageWithLayout } from "~/types";

type FormInput = {
  email: string;
  password: string;
};

const rules: Record<keyof FormInput, ControllerProps["rules"]> = {
  email: {
    required: {
      value: true,
      message: "入力してください",
    },
  },
  password: {
    required: {
      value: true,
      message: "入力してください",
    },
  },
};

const Signin: NextPageWithLayout = () => {
  const loading = useLoading();
  const router = useRouter();
  const {
    control,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<FormInput>({ reValidateMode: "onSubmit" });

  const signinEmail = useCallback(
    async (email: string, password: string) => {
      const res = await signin.email(email, password);

      if (!res.success) {
        if (res.cause === "email") {
          setError("email", { type: "custom", message: res.message });
          return;
        }
        if (res.cause === "password") {
          setError("password", { type: "custom", message: res.message });
          return;
        }
        throw new Error("Sign in failed because of unknown reason.");
      }

      router.push("/");
    },
    [router, setError]
  );

  const signinSns = useCallback(
    (method: Method) => {
      // 認証後もとのページに戻ってくるので、先にリダイレクトページに遷移してから認証
      router.push({
        pathname: "/signin/redirect",
        query: {
          method,
        },
      });
    },
    [router]
  );

  const onSubmit: SubmitHandler<FormInput> = useCallback(
    async ({ email, password }) => {
      loading.wait(signinEmail(email, password));
    },
    [loading, signinEmail]
  );

  const handleGoogleSigninClick = useCallback(() => {
    signinSns(METHOD.GOOGLE);
  }, [signinSns]);

  return (
    <Div100vh className="flex items-center">
      <Container className="max-w-sm px-6 max-h-full overflow-y-auto py-10">
        <Typography
          variant="h5"
          component="h1"
          className="font-bold mx-auto w-fit mb-10"
        >
          ログイン
        </Typography>
        <Stack
          className="w-[300px] mx-auto"
          direction="row"
          justifyContent="center"
        >
          <IconButton className="shadow" onClick={handleGoogleSigninClick}>
            <Image src={GoogleIcon} height={32} width={32} alt="google" />
          </IconButton>
        </Stack>
        <Divider className="my-10">
          <span className="px-3">or</span>
        </Divider>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack className="space-y-5 mx-auto">
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={rules.email}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="メールアドレス"
                  type="text"
                  variant="standard"
                  InputLabelProps={{ shrink: true }}
                  autoComplete="email"
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={rules.password}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="パスワード"
                  type="password"
                  variant="standard"
                  InputLabelProps={{ shrink: true }}
                  autoComplete="current-password"
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
              )}
            />
            <LoadingButton
              type="submit"
              variant="contained"
              size="large"
              className="w-full rounded-full"
              loading={loading.value}
            >
              ログイン
            </LoadingButton>
            <NextLink href="/signin/reset-password" passHref>
              <Link className="w-fit ml-auto text-xs">
                パスワードをお忘れの場合
              </Link>
            </NextLink>
          </Stack>
        </form>
        <p className="text-xs w-fit mx-auto mt-20">
          <span className="mr-1">アカウントをお持ちでない場合</span>
          <NextLink href="/signup" passHref>
            <Link className="inline">アカウントを作成する</Link>
          </NextLink>
        </p>
      </Container>
    </Div100vh>
  );
};

export default Signin;
