"use client";

import classNames from "classnames";
import { useFormState } from "react-dom";
import { Button } from "~/components/Button";
import { Input } from "~/components/Input";
import { signInEmail } from "~/lib/actions/signInEmail";

export function Form({ className }: { className?: string }) {
  const [state, formAction] = useFormState(signInEmail, {});

  return (
    <form
      className={classNames(className, "py-4")}
      action={formAction}
      noValidate
    >
      <div className="space-y-2.5">
        <Input
          id="email"
          type="email"
          name="email"
          autoComplete="username"
          required
          label="メールアドレス"
          errorMessage={state.errors?.email?.[0]}
        />
        <Input
          id="current-password"
          name="password"
          label="パスワード"
          type="password"
          autoComplete="current-password"
          required
          errorMessage={state.errors?.password?.[0]}
        />
      </div>
      {state.errors?.base && (
        <p className="mt-1 p-1 text-tiny text-danger">{state.errors.base}</p>
      )}
      <Button className="mt-2.5" fullWidth color="primary" type="submit">
        ログイン
      </Button>
    </form>
  );
}