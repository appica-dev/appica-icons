<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4 17a2 2 0 0 0 4 0m-4 0a2 2 0 0 1 4 0m-4 0H2V6a1 1 0 0 1 1-1h2m3 12h8m.18-.828a2 2 0 0 0 2.652 2.648M9 5h8c2.761 0 5 3.134 5 7m0 0v5h-1m1-5h-4.5L16 5M2 10h8m4 0h3M7 7v3m5-5v3M3 3l18 18\"/>";
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
