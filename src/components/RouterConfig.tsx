import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "./NotFound";
import { SampleHome } from "./SampleHome";
import { SamplePage1 } from "./SamplePage1";
import { SamplePage2 } from "./SamplePage2";
import { SamplePage3 } from "./SamplePage3";

export const RouterConfig: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SampleHome />} />
        <Route path="page1" element={<SamplePage1 />} />
        <Route path="page2" element={<SamplePage2 />} />
        <Route
          path="page3_hello"
          element={<SamplePage3 Message="Hello Router" />}
        />
        <Route path="page3_hi" element={<SamplePage3 Message="Hi Router" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
