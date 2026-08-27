<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5 17a2 2 0 0 0 4 0m-4 0a2 2 0 0 1 4 0m-4 0H3V6a1 1 0 0 1 1-1h9v12m-4 0h6m0 0a2 2 0 0 0 4 0m-4 0a2 2 0 0 1 4 0m0 0h2v-6m0 0h-8m8 0-3-5h-5\"/>";
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
