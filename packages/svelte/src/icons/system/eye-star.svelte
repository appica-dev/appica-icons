<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9.608 17.682Q5.772 16.618 3 12q3.6-6 9-6t9 6m-11 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0m7.8 8.817-2.172 1.138a.392.392 0 0 1-.568-.41l.415-2.411-1.757-1.707a.39.39 0 0 1 .217-.665l2.428-.352 1.086-2.193a.392.392 0 0 1 .702 0l1.086 2.193 2.428.352a.391.391 0 0 1 .217.665l-1.757 1.707.414 2.41a.39.39 0 0 1-.567.411z\"/>";
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
