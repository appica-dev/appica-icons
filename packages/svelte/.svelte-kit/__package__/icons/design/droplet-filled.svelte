<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M10.745 2.61c-.274.173-.508.4-.689.67l-4.74 7.078a7.44 7.44 0 0 0 1.712 9.636c2.877 2.342 7.061 2.342 9.938 0 2.894-2.356 3.632-6.405 1.74-9.59L13.937 3.28c-.7-1.048-2.125-1.342-3.193-.67\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  {...props}
/>
