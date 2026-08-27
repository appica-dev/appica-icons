<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M11 11H3.5a1.5 1.5 0 1 1 0-3H12l-1.47-1.47a1.87 1.87 0 0 1-.28-2.28 1.5 1.5 0 0 1 2.022-.536Q17.282 6.532 18 7l.3.196a6 6 0 0 1 2.7 5.012V12v2a6 6 0 0 1-6 6h-4.5a1.5 1.5 0 1 1 0-3m0-6h-2a1.5 1.5 0 1 0 0 3H11m-1.5 0a1.5 1.5 0 1 0 0 3H11\"/>";
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
