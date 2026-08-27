<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8 17a2 2 0 0 0 4 0m-4 0a2 2 0 0 1 4 0m-4 0H3m9 0h2v-4a2 2 0 0 0-2-2h-1m0 0L7 6H3m8 5H3m2 0V6m9 2V6m5 6h2m-3.5 3.5L19 17m-1.5-8.5L19 7\"/>";
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
