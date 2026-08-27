<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 19a9 9 0 0 0-9 0V6a9 9 0 0 1 2.114-.884M12 19a9 9 0 0 1 5.899-1.096M12 19v-7M8.914 4.906C9.984 5.076 11.03 5.44 12 6m0 0a9 9 0 0 1 9 0v11M12 6v2M3 3l18 18\"/>";
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
