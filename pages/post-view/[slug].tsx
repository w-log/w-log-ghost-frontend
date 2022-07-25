import { NextPage } from 'next';

import { Container } from '@components/layout/Container';
import { PostImage } from '@components/post/PostImage';

import HTMLViewer from '@components/HtmlViewer';

const Post: NextPage = () => {
    return (
        <Container>
            <PostImage
                src={
                    'https://www.prog-ocean.org/wp-content/uploads/2018/07/matt-howard-248418-unsplash_small-1920x900.jpg'
                }
            />
            <HTMLViewer
                html={`
                <p>
                    <blockquote>Hi</blockquote>
                </p>
<p><span>고피자 가맹본부 입니다.</span></p>
<p><span></span></p>
<p><span>고피자 브랜드 인지도 향상을 통한 가맹점 매출신장 목적으로 </span></p>
<p><span>2021년 6월 28일부터 진행한 고피자 광고 모델 이동욱 배우와의 계약이</span><span style="color:#E74C3C"><strong>2022년 6월 27일로 종료될 예정</strong></span><span>입니다. </span></p>
<p><span>앞으로도 가맹본부에서는 </span><span><strong>‘1인 피자’ 카테고리를 더 많은 고객께 알림을 통해 가맹점 매출 향상에 도움을</strong></span><span> 드릴 수 있는 마케팅 활동을 이어갈 예정으로 기대와 관심 부탁드립니다.</span></p>
<p><span></span></p>
<p><span>다만, </span><span style="color:#E74C3C"><u><strong>이번 광고 모델 계약이 종료됨에 따라 계약위반소지 방지를 위해 광고 소재 교체기간 및 광고물 철거</strong></u></span><span>를 아래와 같이 안내 드리 오니 필히 확인하시어 </span><span><u><strong>해당 소속사로부터의 손해배상 책임 발생이 없도록 유의 바랍니다.</strong></u></span></p>
<p><span><strong></strong></span></p>
<p align="left"><span><strong>1. 모델 이동욱 계약기간</strong></span></p>
<p align="left"><span>   : 2021년 6월 28일 ~</span><span style="color:#E74C3C"><strong> </strong></span><span style="color:#061138"><strong>2022년 6월 27일</strong></span></p>
<p><span></span></p>
<p align="left"><span><strong>2. 소재교체기간</strong></span></p>
<p align="left"><span>   : 2022년 6월 28일 ~</span><span style="color:#E74C3C"><strong> 2022년 7월 27일</strong></span></p>
<p><span><strong></strong></span></p>
<p align="left"><span><strong>3. 가맹점 요청사항</strong></span></p>
<p align="left"><span>  : 소재교체기간 내 </span><span><strong>이동욱 배우 초상을 활용한 광고물 철거 및 폐기</strong></span></p>
<p align="left"><span>   *</span><span><u><strong> 폐기 시 모델의 얼굴이 노출되지 않도록 처리 부탁드립니다.</strong></u></span><span> (봉투 등에 담아서 외부에 보이지 않도록 폐기처리)</span></p>
<p><span></span></p>
<p align="left"><span><strong>4. 철거 및 교체 대상 모델 초상활용 소재</strong></span></p>
<p><span>  - 배달플랫폼 내 이미지 교체</span></p>
<p><span>  - 매장 내/외부 DID 이미지 교체</span></p>
<p><span>  - 매장 내/외부 포스터/배너 철거</span></p>
<p><span>  - 매장 내/외부 대형/전신/반신 시트지 철거</span></p>
<p><span>  - 포토카드, 전단지, 피자박스 등 포장용기 폐기</span></p>
<p><span>  - 2022년 6월 27일 이후 SNS 각종 커뮤니티 게시물 업로드, 보도자료 배포, 광고노출 금지</span></p>
<p><span></span></p>
<p align="left"><span><strong>5. 철거 및 교체 제외 항목</strong></span></p>
<p><span>  - 2022년 6월 28일 이전 업로드 한 SNS 게시물</span></p>
<p><span>   단, 계약기간 내 업로드한 콘텐츠를 계약기간 종료 후 재 활용(리그램) 불가</span></p>
<p><span></span></p>
<p align="left"><span>감사합니다.</span></p>
<p><span></span></p>
<p><span></span></p>`}
            />
        </Container>
    );
};

export default Post;
