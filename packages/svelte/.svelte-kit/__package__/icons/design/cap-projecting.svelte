<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M20 6H7a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h13m-7-6a2 2 0 1 1-4 0 2 2 0 0 1 4 0m0 0h7\"/>";
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
