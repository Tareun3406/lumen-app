import {Button, Dialog, Input, XStack, Label } from "tamagui";
import {useAppDispatch, useAppSelector} from "@/hooks/storeHooks";
import {selectRemote, setName} from "@/store/slices/remoteSlice";
import {useRemote} from "@/hooks/remoteHooks";
import {useState} from "react";

export interface IRemoteJoinProps {
  onClickBack: () => void;
  onConnected: () => void;  // todo onConnect 메서드 삭제
}
export default function RemoteJoin(props: IRemoteJoinProps) {
  const { username, socketStatus } = useAppSelector(selectRemote);
  const dispatch = useAppDispatch();
  const { connectRemote, joinRemote } = useRemote();

  const [inviteCode, setInviteCode] = useState<string>("");

  const handleChangeName = (changedName: string) => {
    dispatch(setName(changedName));
  };

  const handleChangeCode = (changedCode: string) => {
    setInviteCode(changedCode);
  };

  const handleJoin = async () => {
    if (!inviteCode || !username) return;
    await connectRemote();
    joinRemote({ inviteCode, isReconnect: false });
  };

  return (
    <>
      <Dialog.Title>초대코드로 연결</Dialog.Title>
      <Dialog.Description>사용할 닉네임을 지정해주세요. 해당 닉네임은 접속자 목록에 표시됩니다.</Dialog.Description>
      <XStack>
        <Label htmlFor="name" style={{justifyContent:"flex-end"}}>
          닉네임
        </Label>
        <Input size="$4" borderWidth={2} id={"name"} onChangeText={handleChangeName} value={username}/>
      </XStack>
      <XStack>
        <Label htmlFor="code" style={{justifyContent:"flex-end"}}>
          초대코드
        </Label>
        <Input size="$4" borderWidth={2} id={"code"} onChangeText={handleChangeCode} value={inviteCode}/>
      </XStack>
      <XStack gap={"$2"}>
        <Button onPress={props.onClickBack}>뒤로</Button>
        <Button onPress={handleJoin}>확인</Button> {/* todo 버튼 효과에 스피너 기능 있으니 참고 */}
      </XStack>
    </>
  )
}