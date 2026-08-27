<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m3 9 1.5 6 1.379-5.515a.64.64 0 0 1 1.242 0L8.5 15 10 9m3 2.5V15m3-6 5 6m0-6-5 6m-3-6h.01\"/>";
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
