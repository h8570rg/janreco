import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { ModalHeader } from "@/components/Modal";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/Popover";
import { serverServices } from "@/lib/services/server";
import { GameInputForm } from "./(components)/Form";
import { GameInputModalController } from "./(components)/ModalController";

export async function GameInputModal({ matchId }: { matchId: string }) {
  const { getMatch } = serverServices();
  const [match] = await Promise.all([getMatch({ matchId })]);

  return (
    <GameInputModalController>
      <ModalHeader className="flex justify-between">
        <div>結果入力</div>
        <Popover size="sm" color="secondary">
          <PopoverTrigger>
            <Button className="gap-1" variant="light" size="sm">
              <span className="text-secondary underline">同点の場合</span>
              <Icon className="size-4 fill-secondary" name="help" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="max-w-[280px] py-2">
            点数が同じプレイヤーがいる場合、順番が先のプレイヤーの着順が上になります。名前の左のアイコンをドラッグ&ドロップして順番を変更できます。
          </PopoverContent>
        </Popover>
      </ModalHeader>
      <GameInputForm match={match} />
    </GameInputModalController>
  );
}
