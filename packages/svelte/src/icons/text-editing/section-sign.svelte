<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9.172 19A3 3 0 1 0 12 15m0 0a3 3 0 0 1 0-6m0 6a3 3 0 0 0 0-6m2.83-4A3 3 0 1 0 12 9\"/>";
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
