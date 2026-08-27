<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8 3H6l-3 9m0 0v7a1 1 0 0 0 1 1h4.586a1 1 0 0 0 .707-.293l2-2a1 1 0 0 1 1.414 0l2 2a1 1 0 0 0 .707.293H20a1 1 0 0 0 1-1v-7M3 12h18m-5-9h2l3 9M7 16h1m8 0h1\"/>";
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
