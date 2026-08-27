<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9.718 17.359 9 17m0 0-6 3V7l6-3m0 13V4m0 0 6 3m0 0 6-3v7.5M15 7v4m2.8 9.817-2.172 1.138a.392.392 0 0 1-.568-.41l.415-2.411-1.757-1.707a.39.39 0 0 1 .217-.665l2.428-.352 1.086-2.193a.392.392 0 0 1 .702 0l1.086 2.193 2.428.352a.391.391 0 0 1 .217.665l-1.757 1.707.414 2.41a.39.39 0 0 1-.567.411z\"/>";
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
