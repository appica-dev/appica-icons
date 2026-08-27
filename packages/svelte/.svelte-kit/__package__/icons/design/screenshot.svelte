<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7 19a2 2 0 0 1-2-2m0-4v-2m0-4a2 2 0 0 1 2-2m4 0h2m4 0a2 2 0 0 1 2 2m0 4v2m0 4v4m2-2h-4m-4 0h-2\"/>";
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
