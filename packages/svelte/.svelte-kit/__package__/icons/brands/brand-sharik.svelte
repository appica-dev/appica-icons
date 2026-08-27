<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4.28 16.606A8.97 8.97 0 0 1 5.645 5.629a9.03 9.03 0 0 1 11.01-1.346C15.072 8.975 14.24 11.243 12 13c-1.584 1.242-3.836 2.24-7.72 3.606M20.617 9.3c2.113 7.59-4.892 13.361-11.302 11.264 1.93-3.1 3.235-4.606 4.686-6.065 1.705-1.715 3.59-3.23 6.616-5.199\"/>";
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
