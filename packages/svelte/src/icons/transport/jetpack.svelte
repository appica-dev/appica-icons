<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5 16q0 3.5 2 5 2-1.5 2-5m6 0q0 3.5 2 5 2-1.5 2-5m-9-8h4m-4 3h4m-4-5a3 3 0 0 0-6 0v7h6zm4 7h6V6a3 3 0 0 0-6 0z\"/>";
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
