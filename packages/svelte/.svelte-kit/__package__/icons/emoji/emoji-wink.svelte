<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M15 10h.01M9.5 15a3.5 3.5 0 0 0 5 0m-6-6.5L10 10l-1.5 1.5M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12\"/>";
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
