<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m11 18-2-1m0 0-6 3V7l6-3m0 13V4m0 0 6 3m0 0 6-3v9m-6-6v6.5m5 7.5 2-2-2-2m-3 0-2 2 2 2\"/>";
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
