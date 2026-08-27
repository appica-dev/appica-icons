<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0m0 0v-5h9m-5 6h8m4 0h2v-6m0 0c0-1.857-.527-3.637-1.465-4.95C18.598 5.738 17.327 5 16 5h-1m6 7h-4.5L15 5m0 0h-3v13m3-1a2 2 0 1 0 4 0 2 2 0 0 0-4 0\"/>";
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
