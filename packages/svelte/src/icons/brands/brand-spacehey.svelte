<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M15 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0m-1 14h6v-6a3 3 0 0 0-6 0zM11 8v2.5A3.5 3.5 0 0 1 7.5 14H7a3 3 0 0 1 0-6z\"/>";
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
