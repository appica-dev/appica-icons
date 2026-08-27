<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4 6c0 1.657 3.582 3 8 3s8-1.343 8-3M4 6c0-1.657 3.582-3 8-3s8 1.343 8 3M4 6v6m16-6v4.5M4 12c0 1.43 2.67 2.627 6.243 2.927M4 12v6c0 1.546 3.12 2.82 7.128 2.982m6.672-.165-2.172 1.138a.392.392 0 0 1-.568-.41l.415-2.411-1.757-1.707a.39.39 0 0 1 .217-.665l2.428-.352 1.086-2.193a.392.392 0 0 1 .702 0l1.086 2.193 2.428.352a.391.391 0 0 1 .217.665l-1.757 1.707.414 2.41a.39.39 0 0 1-.567.411z\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  fill={"none"}
  stroke={"currentColor"}
  stroke-width={"1.5"}
  stroke-linecap={"round"}
  stroke-linejoin={"round"}
  {...props}
/>
