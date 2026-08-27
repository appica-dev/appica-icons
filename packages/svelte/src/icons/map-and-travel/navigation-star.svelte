<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M15.575 10.747 12 3 4.03 20.275c-.07.2-.018.424.134.572.15.148.374.193.57.116l5.455-1.85m7.61 1.704-2.171 1.138a.392.392 0 0 1-.569-.41l.415-2.411-1.756-1.707a.389.389 0 0 1 .216-.665l2.428-.352 1.087-2.193a.391.391 0 0 1 .701 0l1.087 2.193 2.428.352a.39.39 0 0 1 .216.665l-1.757 1.707.415 2.41a.39.39 0 0 1-.567.411z\"/>";
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
