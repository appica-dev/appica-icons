<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 14.5 6.5 18l2-6L4 8h6l2-5 2 5h6l-4.5 4 2 6zm8.507-5.628L18.497 3H5.503l-2.01 5.872c-1.241 3.593-.134 7.094 3.25 9.407L12 22l5.257-3.721c3.385-2.313 4.49-5.814 3.25-9.407\"/>";
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
