import { useSearchParams } from "react-router-dom";

import { ButtonPrimary, ButtonSecondary } from "../../../components/Button";
import * as Styled from "./Pagination.style";

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const limit = 9;
  const pages = Math.ceil(count / limit);
  const page = searchParams.get("page") || 1;

  function handleButtonClicked(page) {
    setSearchParams({ ...Object.fromEntries([...searchParams]), page });
  }

  return pages > 1 ? (
    <Styled.Container>
      {[...Array(pages)].map((_, i) =>
        page == i + 1 ? (
          <ButtonPrimary
            key={i}
            label={i + 1}
            onClick={() => handleButtonClicked(i + 1)}
          >
            {i + 1}
          </ButtonPrimary>
        ) : (
          <ButtonSecondary
            key={i}
            label={i + 1}
            onClick={() => handleButtonClicked(i + 1)}
          >
            {i + 1}
          </ButtonSecondary>
        )
      )}
    </Styled.Container>
  ) : null;
}

export default Pagination;
