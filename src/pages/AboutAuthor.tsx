import React from "react";

import { AuthorContent } from "components/AuthorPage/Content";
import { PageWrapper } from "components/PageWrapper";
import { AuthorBG } from "components/AuthorPage/Background";

export const AboutAuthor = () => {
  return (
    <PageWrapper className="md:pt-20">
      {/* <AuthorBG /> */}
      <AuthorContent />
    </PageWrapper>
  );
};
