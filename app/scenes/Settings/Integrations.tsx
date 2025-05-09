import * as React from "react";
import { Trans, useTranslation } from "react-i18next";
import styled from "styled-components";
import Flex from "@shared/components/Flex";
import Heading from "~/components/Heading";
import IntegrationCard from "~/components/IntegrationCard";
import Scene from "~/components/Scene";
import Text from "~/components/Text";
import useSettingsConfig from "~/hooks/useSettingsConfig";
import { settingsPath } from "~/utils/routeHelpers";

export function Integrations() {
  const { t } = useTranslation();
  let items = useSettingsConfig();

  items = items
    .filter(
      (item) =>
        item.group === "Integrations" &&
        item.enabled &&
        item.path !== settingsPath("integrations")
    )
    .sort((item) => (item.isActive ? -1 : 1));

  return (
    <Scene title={t("Integrations")}>
      <Heading>{t("Integrations")}</Heading>
      <Text type="secondary">
        <Trans>
          Enable and configure a variety of integrations with Outline.
        </Trans>
      </Text>

      <CardsFlex gap={30} wrap>
        {items.map((item) => (
          <IntegrationCard key={item.path} integration={item} />
        ))}
      </CardsFlex>
    </Scene>
  );
}

const CardsFlex = styled(Flex)`
  margin-top: 20px;
  width: "100%";
`;
