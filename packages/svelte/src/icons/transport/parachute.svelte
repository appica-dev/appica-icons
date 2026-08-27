<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M22 12a10 10 0 0 0-20 0m20 0c0-1.66-1.46-3-3.25-3-1.8 0-3.25 1.34-3.25 3m6.5 0L12 22M2 12c0-1.66 1.45-3 3.25-3 1.79 0 3.25 1.34 3.25 3M2 12l10 10m3.5-10c0-1.66-1.57-3-3.5-3s-3.5 1.34-3.5 3m7 0L12 22M8.5 12 12 22\"/>";
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
