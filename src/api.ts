import type { ComputedRef } from 'vue'
import { shallowReactive } from 'vue'
import type { Modal, UseModalOptions } from './Modal'

export const modals: ComputedRef<Modal>[] = []
export const openedModals: ComputedRef<Modal>[] = []
export const dynamicModals: UseModalOptions[] = shallowReactive([])

export function show(name: string) {
  return toggle(name, true)
}

export function hide(name: string) {
  return toggle(name, false)
}

export function hideAll() {
  return Promise.allSettled([openedModals.map(modal => modal.value.toggle(false))])
}

export function toggle(name: string, show?: boolean) {
  const modal = get(name)
  return modal?.value.toggle(show)
}

export function get(name: string) {
  return modals.find(modal => modal.value.props.name && name === modal.value.props.name)
}