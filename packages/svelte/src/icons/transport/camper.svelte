<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5 18a2 2 0 0 0 4 0m-4 0a2 2 0 0 1 4 0m-4 0H4a1 1 0 0 1-1-1V6a2 2 0 0 1 2-2h12a4 4 0 0 1 4 4H3m6 10h6m0 0a2 2 0 0 0 4 0m-4 0a2 2 0 0 1 4 0m0 0h1a1 1 0 0 0 1-1v-4m0 0-3-5m3 5h-7m0-5v10\"/>";
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
