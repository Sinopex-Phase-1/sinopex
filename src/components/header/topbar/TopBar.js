import { Container } from "../../layout/Layout";
import { Icon } from "../middle-bar/MiddleBar";
import SocialMedia from "./SocialMedia";

export function TopBar({ data, children }) {
  return (
    <div className="bg-[rgba(44,51,51,0.05)] py-2">
      <Container>
        <div className="flex justify-between items-center">
          <div className="text-gray-500">Hengxing Factory Ningbo China</div>
          <SocialMedia></SocialMedia>
        </div>
      </Container>
    </div>
  );
}
