import { Component, ElementRef, ViewChild } from '@angular/core';

/**
 * Menu data with nested structure.
 * Each node has a name and an optional list of children.
 */

interface MenuNode {
  label: string;
  url: string;
  children?: any[];
  isParentSelected?: boolean;
  isChildSelected?: boolean;
  isParentDropdownOpen?: boolean;
  isChildDropdownOpen?: boolean;
}

const TREE_DATA = [
  {
    label: 'Home',
    url: null,
    isParentSelected: false,
    isChildSelected: false,
  },
  {
    label: 'Components & Storage',
    url: 'components-storage',
    isParentSelected: false,
    isChildSelected: false,
    isParentDropdownOpen: false,
    isChildDropdownOpen: false,
    children: [
      { label: 'Components & Storage', url: 'components-storage' },
      { label: 'Computer Systems', url: 'computer-systems' },
      { label: 'TV & Home Theater', url: 'tv-home-theater' },
      { label: 'Networking', url: 'networking' },
    ],
  },
  {
    label: 'Core Components',
    url: 'core-components',
    isParentSelected: false,
    isChildSelected: false,
    isParentDropdownOpen: false,
    isChildDropdownOpen: false,
    children: [
      { label: 'Core Components', url: 'core-components' },
      { label: 'Refurbished', url: 'refurbished' },
      { label: 'Accessories', url: 'accessories' },
    ],
  },
  {
    label: 'Memory',
    url: 'memory',
    isParentSelected: false,
    isChildSelected: false,
    isParentDropdownOpen: false,
    isChildDropdownOpen: false,
    children: [
      { label: 'CPUs / Processors', url: 'cpu' },
      { label: 'Memory', url: 'memory' },
      { label: 'Motherboards', url: 'motherboards' },
      { label: 'GPUs & Video Graphics Devices', url: 'gpu' },
    ],
  },
  {
    label: 'Server Memory',
    url: 'server-memory',
    isParentSelected: false,
    isChildSelected: false,
    isParentDropdownOpen: false,
    isChildDropdownOpen: false,
    children: [
      { label: 'Desktop Memory', url: 'gaming-laptops' },
      { label: 'Laptop Memory', url: 'laptop-memory' },
      { label: 'Server Memory', url: 'server-memory' },
      { label: 'Memory Cards', url: 'memory-cards' },
    ],
  },
  {
    label: 'DDR4',
    url: 'ddr4',
    isParentSelected: false,
    isChildSelected: false,
    isParentDropdownOpen: false,
    isChildDropdownOpen: false,
    children: [
      { label: 'DDR3', url: 'ddr3' },
      { label: 'DDR4', url: 'ddr4' },
      { label: 'DDR5', url: 'ddr5' },
    ],
  },
];

/**
 * @title Tree with nested nodes
 */

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('breadcrumb') breadcrumb: ElementRef;
  localBreadcrumbs = new Array<MenuNode>();
  isPopoverOpen = false;
  isDropdownOpen = false;
  maxCrumbs = 4;

  constructor() {
    this.localBreadcrumbs = TREE_DATA;
  }

  /**
   * Closes all dropdowns by resetting their states.
   */
  public closeAllDropdowns() {
    for (const breadcrumb of this.localBreadcrumbs) {
      breadcrumb.isParentDropdownOpen = false;
      breadcrumb.isChildDropdownOpen = false;
      breadcrumb.isParentSelected = false;
      breadcrumb.isChildSelected = false;
    }
  }

  /**
   * Toggles the popover state and closes all dropdowns.
   */
  public togglePopover() {
    this.closeAllDropdowns();
    this.isPopoverOpen = !this.isPopoverOpen;
  }

  /**
   * Toggles the dropdown state based on the type and index provided.
   * Closes all dropdowns, updates the states, and closes the popover.
   * @param type The type of dropdown ('parent' or 'child').
   * @param index The index of the breadcrumb in the localBreadcrumbs array.
   */
  public toggleDropdown(type, index) {
    if (type === 'parent') {
      this.closeAllDropdowns();
      this.isPopoverOpen = false;
      this.displayedBreadcrumbs[index].isParentDropdownOpen =
        !this.displayedBreadcrumbs[index].isParentDropdownOpen;
      this.displayedBreadcrumbs[index - 1].isParentSelected =
        this.displayedBreadcrumbs[index].isParentDropdownOpen;
    } else {
      this.closeAllDropdowns();
      this.localBreadcrumbs[index].isChildDropdownOpen =
        !this.localBreadcrumbs[index].isChildDropdownOpen;
      this.localBreadcrumbs[index - 1].isChildSelected =
        this.localBreadcrumbs[index].isChildDropdownOpen;
    }
  }

  /**
   * Returns the subset of breadcrumbs to be displayed based on the maxCrumbs value.
   * @returns The subset of breadcrumbs to be displayed.
   */
  public get displayedBreadcrumbs(): MenuNode[] {
    return this.localBreadcrumbs.slice(-this.maxCrumbs);
  }

  /**
   * Checks if there are missing breadcrumbs beyond the maxCrumbs value.
   * @returns True if there are missing breadcrumbs, false otherwise.
   */
  public get isMissingBreadcrumbs(): boolean {
    return this.localBreadcrumbs.length > this.maxCrumbs;
  }
}
