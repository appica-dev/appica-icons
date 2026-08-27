<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5 10h14m-7-8v2m0 0a5 5 0 0 1 5 5v11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9a5 5 0 0 1 5-5\"/>";
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
