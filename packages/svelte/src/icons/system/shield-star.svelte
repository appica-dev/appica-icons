<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M11.136 20.743a12 12 0 0 1-6.789-5.836A12 12 0 0 1 3.487 6a12.01 12.01 0 0 0 8.506-3A12.01 12.01 0 0 0 20.5 6c.504 1.716.614 3.505.343 5.237m-3.045 9.58-2.174 1.138a.393.393 0 0 1-.568-.41l.415-2.411-1.758-1.707a.39.39 0 0 1 .217-.665l2.43-.352 1.086-2.193a.392.392 0 0 1 .703 0l1.087 2.193 2.43.352a.39.39 0 0 1 .216.665l-1.758 1.707.415 2.41a.39.39 0 0 1-.568.41z\"/>";
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
