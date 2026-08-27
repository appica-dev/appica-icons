<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 21v-4 .01M10 20l4-2m-4 0 4 2m-9-3v4m-2-1 4-2m-4 0 4 2m12-3v4m-2-1 4-2m-4 0 4 2M7 14V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8m-6-9h2\"/>";
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
