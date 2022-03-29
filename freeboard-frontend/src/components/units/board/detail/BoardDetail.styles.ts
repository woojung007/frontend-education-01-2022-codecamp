import styled from "@emotion/styled";

export const BodyHTML = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentsContainer = styled.div`
  width: 1200px;
  height: auto;
  padding: 0 100px 20px 100px;
  border: 0.5px solid #bdbdbd;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  margin-top: 101px;
  margin-bottom: 87px;
`;

export const IMG = styled.img`
  cursor: pointer;
`;

//Header
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 1px solid #bdbdbd;
`;

export const LocationDiv = styled.div`
  width: 376px;
  height: 72px;
  margin-right: 35px;
  margin-top: 20px;
  opacity: 0;
`;

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 25vw;
  height: 60px;
  padding-right: 17px;
`;

export const InfoText = styled.div`
  width: 100%;
  padding-left: 17px;
`;

export const Writer = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
`;

export const Date = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #828282;
`;

export const IconDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LinkImg = styled.div`
  margin-right: 30px;
`;

export const LocationImg = styled.div``;

//content
export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const BoardDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const BoardTitle = styled.div`
  width: 100%;
  font-weight: 700, Bold;
  font-size: 36px;
  padding: 80px 0 40px 0;
`;

export const BoardImage = styled.div`
  width: 996px;
  height: 480px;
  background-color: aliceblue;
  margin-bottom: 40px;
`;

export const BoardContents = styled.div`
  width: 100%;
  background-color: aliceblue;
  margin-bottom: 40px;
`;

// export const BoardVideo = styled.div`
//   width: 486px;
//   height: 240px;
//   background-color: aliceblue;
//   margin-bottom: 163px;
// `;

//좋아요
export const BoardLike = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 180px;
  margin-bottom: 80px;
  padding-top: 122px;
`;

export const LikeDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const LikeBtn = styled.button`
  border: none;
`;

export const LikeNum = styled.div`
  height: 27px;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #ffd600;
`;

export const DisLikeNum = styled.div`
  height: 27px;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #828282;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1200px;
  height: 220px;
  border-bottom: 1px solid #bdbdbd;
  margin-bottom: 80px;
`;

export const BtnDiv = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 87px;
 


`;

export const GoBtn = styled.button`
  width: 180px;
  height: 52px;
  border: 1px solid #bdbdbd;
  cursor: pointer;
`;
