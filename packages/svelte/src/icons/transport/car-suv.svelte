<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m5 9 2-4h7.438a2 2 0 0 1 1.94 1.515L17 9h3a2 2 0 0 1 2 2v3M5 9v3m0-3h13m-8 0V5M2 7v4m20.001 3.001A5 5 0 0 0 18 12a5 5 0 0 0-4 2h-3a5 5 0 0 0-8.003.003M5 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0m11 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0\"/>";
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
