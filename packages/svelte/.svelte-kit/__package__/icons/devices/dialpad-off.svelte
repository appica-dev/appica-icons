<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7 7H3V3l18 18M10 6V3h4v4h-3m6 6v-3h4v4h-3m-4 0h-4v-4m7-7h4v4h-4zM3 10h4v4H3zm7 7h4v4h-4z\"/>";
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
