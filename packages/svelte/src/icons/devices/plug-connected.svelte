<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m3 21 2.5-2.5m13-13L21 3m-11 8-2 2m5 1-2 2m-4-4 5 5-1.5 1.5a3.535 3.535 0 1 1-5-5zm10 0-5-5 1.5-1.5a3.536 3.536 0 1 1 5 5z\"/>";
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
