<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M15 11v.01M10 6h1.499l4.5-3v3.803A6.02 6.02 0 0 1 18.657 10h1.341a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1.342q-.085.24-.19.472M16.999 17v1.5a1.5 1.5 0 1 1-3 0v-.583q-.496.083-1 .083h-4q-.504 0-1-.083v.583a1.5 1.5 0 0 1-3 0v-2.027a6 6 0 0 1 1.5-9.928M3 3l18 18\"/>";
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
