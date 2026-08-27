<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 6.3c-4.418 0-8 3.403-8 7.6s3.582 7.6 8 7.6 8-3.403 8-7.6-3.582-7.6-8-7.6m0 0c0-1.267.565-3.8 2.823-3.8M12 6.3c-.47-1.108 0-3.8-5.647-3.8.314.95.941 3.8 5.647 3.8\"/>";
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
