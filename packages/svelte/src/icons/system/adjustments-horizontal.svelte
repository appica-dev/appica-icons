<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 6a2 2 0 1 0 4 0m-4 0a2 2 0 1 1 4 0m-4 0H4m12 0h4M6 12a2 2 0 0 0 4 0m-4 0a2 2 0 0 1 4 0m-4 0H4m6 0h10m-5 6a2 2 0 0 0 4 0m-4 0a2 2 0 0 1 4 0m-4 0H4m15 0h1\"/>";
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
