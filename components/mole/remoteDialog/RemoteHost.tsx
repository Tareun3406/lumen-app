import {Button, Dialog, Input, XStack, Label } from "tamagui";
import {useRemote} from "@/hooks/remoteHooks";
import {useAppDispatch, useAppSelector} from "@/hooks/storeHooks";
import {selectRemote, setName} from "@/store/slices/remoteSlice";

export interface IRemoteHostProps {
  onClickBack: () => void;
  onConnected: () => void; // todo onConnect 메서드 삭제
}

export default function RemoteHost(props: IRemoteHostProps) {
  const { connectRemote, hostRemote } = useRemote();
  const { username, socketStatus } = useAppSelector(selectRemote);
  const dispatch = useAppDispatch();

  const handleCreate = async () => {
    if (socketStatus === "PENDING" || socketStatus === "IDLE") return;

    await connectRemote();
    hostRemote();
    return;
  };

  const handleChangeName = (text: string) => {
    dispatch(setName(text));
  };

  return (
    <>
      <Dialog.Title>초대코드 생성</Dialog.Title>
      <Dialog.Description>사용할 닉네임을 지정해주세요. 해당 닉네임은 접속자 목록에 표시됩니다.</Dialog.Description>
      <XStack>
        <Label htmlFor="name" style={{justifyContent:"flex-end"}}>
          닉네임
        </Label>
        <Input size="$4" borderWidth={2} id={"name"} value={username} onChangeText={handleChangeName}/>
      </XStack>
      <XStack gap={"$2"}>
        <Button onPress={props.onClickBack}>뒤로</Button>
        <Button onPress={handleCreate}>확인</Button> {/* todo 버튼 효과에 스피너 기능 있으니 참고 */}
      </XStack>
    </>
  )
}