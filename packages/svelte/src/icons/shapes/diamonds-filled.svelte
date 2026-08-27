<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 2.25c-.753 0-1.46.358-1.91.965L4.898 9.94c-.863 1.108-.863 3.007 0 4.122l5.206 6.74a2.38 2.38 0 0 0 1.908.949 2.37 2.37 0 0 0 1.9-.966l5.192-6.723c.862-1.107.862-3.006 0-4.122L13.897 3.2A2.37 2.37 0 0 0 12 2.25\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  {...props}
/>
