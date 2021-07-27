import { BrowseContainer } from "containers/browse";
import { UseContent } from "hooks";
import React from "react";
import SelectionFilter from "utils/selection-map";

export default function Browse() {
  const { series } = UseContent("series");
  const { films } = UseContent("films");
  const slides = SelectionFilter({ series, films });
  
  return <BrowseContainer slides={slides} />;
}
