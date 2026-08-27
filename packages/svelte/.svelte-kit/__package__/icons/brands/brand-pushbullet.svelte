<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8 8v8m-5-4a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12m8-4v8h2a4 4 0 1 0 0-8z\"/>";
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
