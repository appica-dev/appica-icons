<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M10 19H5a2 2 0 0 1-2-2V7m0 0a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2M3 7l9 6 9-6m0 0v4.5m-3.2 9.317-2.172 1.138a.392.392 0 0 1-.568-.41l.415-2.411-1.757-1.707a.39.39 0 0 1 .217-.665l2.428-.352 1.086-2.193a.392.392 0 0 1 .702 0l1.086 2.193 2.428.352a.391.391 0 0 1 .217.665l-1.757 1.707.414 2.41a.39.39 0 0 1-.567.411z\"/>";
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
