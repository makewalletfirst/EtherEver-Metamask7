export const NETWORK_MULTI_SELECTOR_TEST_IDS = {
  // Containers
  NETWORK_MANAGER_BOTTOM_SHEET: 'network-manager-bottom-sheet',
  POPULAR_NETWORKS_CONTAINER: 'popular-networks-selector-container',
  CUSTOM_NETWORKS_CONTAINER: 'custom-networks-selector-container',
  CUSTOM_NETWORK_CONTAINER: 'network-multi-selector-custom-network-container',

  // Buttons
  SELECT_ALL_POPULAR_NETWORKS_SELECTED:
    'network-multi-selector-select-all-popular-networks-selected',
  SELECT_ALL_POPULAR_NETWORKS_NOT_SELECTED:
    'network-multi-selector-select-all-popular-networks-not-selected',
  OPEN_NETWORK_MANAGER: 'open-network-manager',

  // Tabs
  POPULAR_NETWORKS_TAB: 'popular-networks-tab',
  CUSTOM_NETWORKS_TAB: 'custom-networks-tab',

  // List Item
  NETWORK_LIST_ITEM: (caipChainId: string, isSelected: boolean) =>
    `network-list-item-${caipChainId}-${
      isSelected ? 'selected' : 'not-selected'
    }`,
} as const;

export enum NetworkToCaipChainId {
  ETHEREUM = 'eip155:1',
}
