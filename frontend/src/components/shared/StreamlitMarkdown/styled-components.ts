/**
 * @license
 * Copyright 2018-2021 Streamlit Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import styled from "@emotion/styled"

export const StyledStreamlitMarkdown = styled.div(({ theme }) => ({
  fontFamily: theme.fonts.sansSerif,
  marginBottom: `-${theme.spacing.lg}`,
  a: {
    color: theme.colors.blue,
  },

  li: {
    margin: "0.2em 0 0.2em 1.2em",
    padding: "0 0 0 0.6em",
    fontSize: theme.fontSizes.md,
  },

  tr: {
    borderTop: `1px solid ${theme.colors.lightGray}`,
    background: theme.colors.white,
  },

  "th, td": {
    padding: "6px 13px",
    border: `1px solid ${theme.colors.lightGray}`,
  },
}))

export const StyledLinkIconContainer = styled.div(({ theme }) => ({
  position: "relative",
  left: "-30px",
  paddingLeft: "30px",
  a: {
    display: "none",
  },
  ":hover": {
    a: {
      display: "inline-block",
    },
  },
}))

export const StyledLinkIcon = styled.a(({ theme }) => ({
  position: "absolute",
  top: "-2px",
  left: 0,
}))
