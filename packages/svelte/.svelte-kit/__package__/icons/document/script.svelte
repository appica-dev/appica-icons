<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M17 20H6a3 3 0 0 1 0-6h11a3 3 0 0 0 0 6m0 0h1a3 3 0 0 0 3-3V6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v8\"/>";
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
