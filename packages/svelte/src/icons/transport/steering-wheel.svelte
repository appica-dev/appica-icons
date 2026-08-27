<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18m0 0v-7m-2-2a2 2 0 0 0 2 2m-2-2a2 2 0 0 1 4 0m-4 0-6.75-2M12 14a2 2 0 0 0 2-2m0 0 6.75-2\"/>";
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
